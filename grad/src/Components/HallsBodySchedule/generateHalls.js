export let fetchedLabData;
export let halls = {};
export let isLoading = true; // Add loading state variable

const generateAppointments = (day, hall, labNum, start, end) => {
    const appointmentsObj = {};
    for (let i = start; i <= end; i++) {
        const appointmentKey = `${day.toLowerCase()}${i + labNum}`;
        appointmentsObj[appointmentKey] = fetchedLabData.find(e =>
            e.day.toLowerCase() === day.toLowerCase() && e.start === i && e.hallName === hall
        );
    }
    return appointmentsObj;
};

fetch('https://localhost:44377/api/Admin/GetAllLectures')
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
    halls = {
        ...generateAppointments("Sunday", "مدرج1", "1", 8, 19),
        ...generateAppointments("Sunday", "مدرج2", "2", 8, 19),
        ...generateAppointments("Sunday", "مدرج3", "3", 8, 19),
        ...generateAppointments("Sunday", "مدرج4", "4", 8, 19),
        ...generateAppointments("Sunday", "مدرج5", "5", 8, 19),
        ...generateAppointments("Sunday", "مدرج6", "6", 8, 19),
        ...generateAppointments("Sunday", "مدرج7", "7", 8, 19),
        ...generateAppointments("Sunday", "مدرج8", "8", 8, 19),
        ...generateAppointments("Sunday", "مدرج9", "9", 8, 19),
        ...generateAppointments("Sunday", "مدرج0أ", "10", 8, 19),
        ...generateAppointments("Sunday", "مدرج1أ", "11", 8, 19),
        ...generateAppointments("Sunday", "مدرج2أ", "12", 8, 19),
        ...generateAppointments("Sunday", "مدرج3أ", "13", 8, 19),
        ...generateAppointments("Sunday", "مدرج4أ", "14", 8, 19),
        ...generateAppointments("monday", "مدرج1", "1", 8, 19),
        ...generateAppointments("monday", "مدرج2", "2", 8, 19),
        ...generateAppointments("monday", "مدرج3", "3", 8, 19),
        ...generateAppointments("monday", "مدرج4", "4", 8, 19),
        ...generateAppointments("monday", "مدرج5", "5", 8, 19),
        ...generateAppointments("monday", "مدرج6", "6", 8, 19),
        ...generateAppointments("monday", "مدرج7", "7", 8, 19),
        ...generateAppointments("monday", "مدرج8", "8", 8, 19),
        ...generateAppointments("monday", "مدرج9", "9", 8, 19),
        ...generateAppointments("monday", "مدرج0أ", "10", 8, 19),
        ...generateAppointments("monday", "مدرج1أ", "11", 8, 19),
        ...generateAppointments("monday", "مدرج2أ", "12", 8, 19),
        ...generateAppointments("monday", "مدرج3أ", "13", 8, 19),
        ...generateAppointments("monday", "مدرج4أ", "14", 8, 19),
        ...generateAppointments("tuesday", "مدرج1", "1", 8, 19),
        ...generateAppointments("tuesday", "مدرج2", "2", 8, 19),
        ...generateAppointments("tuesday", "مدرج3", "3", 8, 19),
        ...generateAppointments("tuesday", "مدرج4", "4", 8, 19),
        ...generateAppointments("tuesday", "مدرج5", "5", 8, 19),
        ...generateAppointments("tuesday", "مدرج6", "6", 8, 19),
        ...generateAppointments("tuesday", "مدرج7", "7", 8, 19),
        ...generateAppointments("tuesday", "مدرج8", "8", 8, 19),
        ...generateAppointments("tuesday", "مدرج9", "9", 8, 19),
        ...generateAppointments("tuesday", "مدرج0أ", "10", 8, 19),
        ...generateAppointments("tuesday", "مدرج1أ", "11", 8, 19),
        ...generateAppointments("tuesday", "مدرج2أ", "12", 8, 19),
        ...generateAppointments("tuesday", "مدرج3أ", "13", 8, 19),
        ...generateAppointments("tuesday", "مدرج4أ", "14", 8, 19),
        ...generateAppointments("wednesday", "مدرج1", "1", 8, 19),
        ...generateAppointments("wednesday", "مدرج2", "2", 8, 19),
        ...generateAppointments("wednesday", "مدرج3", "3", 8, 19),
        ...generateAppointments("wednesday", "مدرج4", "4", 8, 19),
        ...generateAppointments("wednesday", "مدرج5", "5", 8, 19),
        ...generateAppointments("wednesday", "مدرج6", "6", 8, 19),
        ...generateAppointments("wednesday", "مدرج7", "7", 8, 19),
        ...generateAppointments("wednesday", "مدرج8", "8", 8, 19),
        ...generateAppointments("wednesday", "مدرج9", "9", 8, 19),
        ...generateAppointments("wednesday", "مدرج0أ", "10", 8, 19),
        ...generateAppointments("wednesday", "مدرج1أ", "11", 8, 19),
        ...generateAppointments("wednesday", "مدرج2أ", "12", 8, 19),
        ...generateAppointments("wednesday", "مدرج3أ", "13", 8, 19),
        ...generateAppointments("wednesday", "مدرج4أ", "14", 8, 19),
        ...generateAppointments("thursday", "مدرج1", "1", 8, 19),
        ...generateAppointments("thursday", "مدرج2", "2", 8, 19),
        ...generateAppointments("thursday", "مدرج3", "3", 8, 19),
        ...generateAppointments("thursday", "مدرج4", "4", 8, 19),
        ...generateAppointments("thursday", "مدرج5", "5", 8, 19),
        ...generateAppointments("thursday", "مدرج6", "6", 8, 19),
        ...generateAppointments("thursday", "مدرج7", "7", 8, 19),
        ...generateAppointments("thursday", "مدرج8", "8", 8, 19),
        ...generateAppointments("thursday", "مدرج9", "9", 8, 19),
        ...generateAppointments("thursday", "مدرج0أ", "10", 8, 19),
        ...generateAppointments("thursday", "مدرج1أ", "11", 8, 19),
        ...generateAppointments("thursday", "مدرج2أ", "12", 8, 19),
        ...generateAppointments("thursday", "مدرج3أ", "13", 8, 19),
        ...generateAppointments("thursday", "مدرج4أ", "14", 8, 19),
    };
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
    isLoading = false;
  });
