const supabaseUrl = 'https://jubltuamhtewyxykkopa.supabase.co'; // Replace with your actual Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1Ymx0dWFtaHRld3l4eWtrb3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzMTQyNTAsImV4cCI6MjA0OTg5MDI1MH0.1gQ3u5fEdSWS3G8mr71yviUX4DR6LKI9C9aoOaNw5rw'; // Replace with your actual anon key
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

console.log('Supabase client:', supabaseClient); // Add this to verify the client is initialized


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inspection-form');
    if (!form) {
        console.error('Form with id "inspection-form" not found');
        return;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Collect form data
        const vehicleType = document.getElementById('vehicle-type').value;
        const brakes = document.querySelector('input[name="brakes"]').checked;
        const lights = document.querySelector('input[name="lights"]').checked;
        const tires = document.querySelector('input[name="tires"]').checked;
        const faults = document.getElementById('faults').value;
        const missionReadiness = document.getElementById('mission-readiness').value;

        // Prepare data for Supabase
        const formData = {
            vehicle_type: vehicleType,
            brakes_checked: brakes,
            lights_checked: lights,
            tires_checked: tires,
            faults_observed: faults,
            mission_readiness: missionReadiness,
            inspection_date: new Date().toISOString(),
        };

        // Insert data into Supabase
        const { data, error } = await supabaseClient.from('inspections').insert([formData]);

        if (error) {
            console.error('Error inserting data:', error);
            alert('Failed to submit inspection. Please try again.');
        } else {
            console.log('Data inserted successfully:', data);
            alert('Inspection submitted successfully!');
        }
    });
});
// Function to retrieve data from Supabase
async function fetchInspections() {
    try {
        const { data, error } = await supabaseClient.from('inspections').select('*');

        if (error) {
            console.error('Error fetching data:', error);
            alert('Failed to retrieve data. Please try again.');
            return;
        }

        console.log('Fetched data:', data);
        displayInspections(data); // Call function to display data
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

// Function to display the retrieved data
function displayInspections(data) {
    const container = document.getElementById('inspection-data');
    if (!container) {
        console.warn('No container found to display data');
        return;
    }

    // Clear existing content
    container.innerHTML = '';

    if (!data || data.length === 0) {
        container.innerHTML = '<p>No inspection data available.</p>';
        return;
    }

    // Create a table to display the data
    const table = document.createElement('table');
    table.border = '1';

    // Create table header
    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach((key) => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create table rows
    data.forEach((row) => {
        const tableRow = document.createElement('tr');
        Object.values(row).forEach((value) => {
            const td = document.createElement('td');
            td.textContent = value;
            tableRow.appendChild(td);
        });
        table.appendChild(tableRow);
    });

    container.appendChild(table);
}

// Fetch inspections when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-data-button');

    if (fetchButton) {
        fetchButton.addEventListener('click', fetchInspections);
    } else {
        console.error('Fetch button not found');
    }
});
