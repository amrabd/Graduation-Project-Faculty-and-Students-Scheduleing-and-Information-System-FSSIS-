export let fetchedLabData;
export let labs = {};
export let isLoading = true; // Add loading state variable

const generateAppointments = (day, lab, labNum, start, end) => {
    const appointmentsObj = {};
    for (let i = start; i <= end; i++) {
        const appointmentKey = `${day.toLowerCase()}${i + labNum}`;
        appointmentsObj[appointmentKey] = fetchedLabData.find(e =>
            e.day.toLowerCase() === day.toLowerCase() && e.start === i && e.labName === lab
        );
    }
    return appointmentsObj;
};


fetch('https://localhost:44377/api/Admin/GetAllClasses')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched data:', data); // Log fetched data
    fetchedLabData = data;
    isLoading = false;
    console.log('isLoading:', isLoading);
    // Once data is fetched, proceed with generating appointments
 
 labs = {
    ...generateAppointments("Sunday", "0أ", "1", 8, 19),
    ...generateAppointments("Sunday", "0ب", "2", 8, 19),
    ...generateAppointments("Sunday", "0ج", "3", 8, 19),
    ...generateAppointments("Sunday", "0د", "4", 8, 19),
    ...generateAppointments("Sunday", "0ه", "5", 8, 19),
    ...generateAppointments("Sunday", "1أ", "6", 8, 19),
    ...generateAppointments("Sunday", "1ب", "7", 8, 19),
    ...generateAppointments("Sunday", "1ج", "8", 8, 19),
    ...generateAppointments("Sunday", "1د", "9", 8, 19),
    ...generateAppointments("Sunday", "1ه", "10", 8, 19),
    ...generateAppointments("Sunday", "2أ", "11", 8, 19),
    ...generateAppointments("Sunday", "2ب", "12", 8, 19),
    ...generateAppointments("Sunday", "2ج", "13", 8, 19),
    ...generateAppointments("Sunday", "2د", "14", 8, 19),
    ...generateAppointments("Sunday", "2ه", "15", 8, 19),
    ...generateAppointments("Sunday", "3أ", "16", 8, 19),
    ...generateAppointments("Sunday", "3ب", "17", 8, 19),
    ...generateAppointments("Sunday", "3ج", "18", 8, 19),
    ...generateAppointments("Sunday", "3د", "19", 8, 19),
    ...generateAppointments("Sunday", "3ه", "20", 8, 19),
    ...generateAppointments("Sunday", "4أ", "21", 8, 19),
    ...generateAppointments("Sunday", "4ب", "22", 8, 19),
    ...generateAppointments("Sunday", "4ج", "23", 8, 19),
    ...generateAppointments("Sunday", "4د", "24", 8, 19),
    ...generateAppointments("Sunday", "4ه", "25", 8, 19),
    ...generateAppointments("monday", "0أ", "1", 8, 19),
    ...generateAppointments("monday", "0ب", "2", 8, 19),
    ...generateAppointments("monday", "0ج", "3", 8, 19),
    ...generateAppointments("monday", "0د", "4", 8, 19),
    ...generateAppointments("monday", "0ه", "5", 8, 19),
    ...generateAppointments("monday", "1أ", "6", 8, 19),
    ...generateAppointments("monday", "1ب", "7", 8, 19),
    ...generateAppointments("monday", "1ج", "8", 8, 19),
    ...generateAppointments("monday", "1د", "9", 8, 19),
    ...generateAppointments("monday", "1ه", "10", 8, 19),
    ...generateAppointments("monday", "2أ", "11", 8, 19),
    ...generateAppointments("monday", "2ب", "12", 8, 19),
    ...generateAppointments("monday", "2ج", "13", 8, 19),
    ...generateAppointments("monday", "2د", "14", 8, 19),
    ...generateAppointments("monday", "2ه", "15", 8, 19),
    ...generateAppointments("monday", "3أ", "16", 8, 19),
    ...generateAppointments("monday", "3ب", "17", 8, 19),
    ...generateAppointments("monday", "3ج", "18", 8, 19),
    ...generateAppointments("monday", "3د", "19", 8, 19),
    ...generateAppointments("monday", "3ه", "20", 8, 19),
    ...generateAppointments("monday", "4أ", "21", 8, 19),
    ...generateAppointments("monday", "4ب", "22", 8, 19),
    ...generateAppointments("monday", "4ج", "23", 8, 19),
    ...generateAppointments("monday", "4د", "24", 8, 19),
    ...generateAppointments("monday", "4ه", "25", 8, 19),
    ...generateAppointments("tuesday", "0أ", "1", 8, 19),
    ...generateAppointments("tuesday", "0ب", "2", 8, 19),
    ...generateAppointments("tuesday", "0ج", "3", 8, 19),
    ...generateAppointments("tuesday", "0د", "4", 8, 19),
    ...generateAppointments("tuesday", "0ه", "5", 8, 19),
    ...generateAppointments("tuesday", "1أ", "6", 8, 19),
    ...generateAppointments("tuesday", "1ب", "7", 8, 19),
    ...generateAppointments("tuesday", "1ج", "8", 8, 19),
    ...generateAppointments("tuesday", "1د", "9", 8, 19),
    ...generateAppointments("tuesday", "1ه", "10", 8, 19),
    ...generateAppointments("tuesday", "2أ", "11", 8, 19),
    ...generateAppointments("tuesday", "2ب", "12", 8, 19),
    ...generateAppointments("tuesday", "2ج", "13", 8, 19),
    ...generateAppointments("tuesday", "2د", "14", 8, 19),
    ...generateAppointments("tuesday", "2ه", "15", 8, 19),
    ...generateAppointments("tuesday", "3أ", "16", 8, 19),
    ...generateAppointments("tuesday", "3ب", "17", 8, 19),
    ...generateAppointments("tuesday", "3ج", "18", 8, 19),
    ...generateAppointments("tuesday", "3د", "19", 8, 19),
    ...generateAppointments("tuesday", "3ه", "20", 8, 19),
    ...generateAppointments("tuesday", "4أ", "21", 8, 19),
    ...generateAppointments("tuesday", "4ب", "22", 8, 19),
    ...generateAppointments("tuesday", "4ج", "23", 8, 19),
    ...generateAppointments("tuesday", "4د", "24", 8, 19),
    ...generateAppointments("tuesday", "4ه", "25", 8, 19),
    ...generateAppointments("wednesday", "0أ", "1", 8, 19),
    ...generateAppointments("wednesday", "0ب", "2", 8, 19),
    ...generateAppointments("wednesday", "0ج", "3", 8, 19),
    ...generateAppointments("wednesday", "0د", "4", 8, 19),
    ...generateAppointments("wednesday", "0ه", "5", 8, 19),
    ...generateAppointments("wednesday", "1أ", "6", 8, 19),
    ...generateAppointments("wednesday", "1ب", "7", 8, 19),
    ...generateAppointments("wednesday", "1ج", "8", 8, 19),
    ...generateAppointments("wednesday", "1د", "9", 8, 19),
    ...generateAppointments("wednesday", "1ه", "10", 8, 19),
    ...generateAppointments("wednesday", "2أ", "11", 8, 19),
    ...generateAppointments("wednesday", "2ب", "12", 8, 19),
    ...generateAppointments("wednesday", "2ج", "13", 8, 19),
    ...generateAppointments("wednesday", "2د", "14", 8, 19),
    ...generateAppointments("wednesday", "2ه", "15", 8, 19),
    ...generateAppointments("wednesday", "3أ", "16", 8, 19),
    ...generateAppointments("wednesday", "3ب", "17", 8, 19),
    ...generateAppointments("wednesday", "3ج", "18", 8, 19),
    ...generateAppointments("wednesday", "3د", "19", 8, 19),
    ...generateAppointments("wednesday", "3ه", "20", 8, 19),
    ...generateAppointments("wednesday", "4أ", "21", 8, 19),
    ...generateAppointments("wednesday", "4ب", "22", 8, 19),
    ...generateAppointments("wednesday", "4ج", "23", 8, 19),
    ...generateAppointments("wednesday", "4د", "24", 8, 19),
    ...generateAppointments("wednesday", "4ه", "25", 8, 19),
    ...generateAppointments("thursday", "0أ", "1", 8, 19),
    ...generateAppointments("thursday", "0ب", "2", 8, 19),
    ...generateAppointments("thursday", "0ج", "3", 8, 19),
    ...generateAppointments("thursday", "0د", "4", 8, 19),
    ...generateAppointments("thursday", "0ه", "5", 8, 19),
    ...generateAppointments("thursday", "1أ", "6", 8, 19),
    ...generateAppointments("thursday", "1ب", "7", 8, 19),
    ...generateAppointments("thursday", "1ج", "8", 8, 19),
    ...generateAppointments("thursday", "1د", "9", 8, 19),
    ...generateAppointments("thursday", "1ه", "10", 8, 19),
    ...generateAppointments("thursday", "2أ", "11", 8, 19),
    ...generateAppointments("thursday", "2ب", "12", 8, 19),
    ...generateAppointments("thursday", "2ج", "13", 8, 19),
    ...generateAppointments("thursday", "2د", "14", 8, 19),
    ...generateAppointments("thursday", "2ه", "15", 8, 19),
    ...generateAppointments("thursday", "3أ", "16", 8, 19),
    ...generateAppointments("thursday", "3ب", "17", 8, 19),
    ...generateAppointments("thursday", "3ج", "18", 8, 19),
    ...generateAppointments("thursday", "3د", "19", 8, 19),
    ...generateAppointments("thursday", "3ه", "20", 8, 19),
    ...generateAppointments("thursday", "4أ", "21", 8, 19),
    ...generateAppointments("thursday", "4ب", "22", 8, 19),
    ...generateAppointments("thursday", "4ج", "23", 8, 19),
    ...generateAppointments("thursday", "4د", "24", 8, 19),
    ...generateAppointments("thursday", "4ه", "25", 8, 19),
};

  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
    isLoading = false;
  });
