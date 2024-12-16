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
