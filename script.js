let partyData = {
    date: '',
    description: '',
    inviteMessage: '',
    guests: []
  };
  
  document.getElementById('partyForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    partyData.date = document.getElementById('partyDate').value;
    partyData.description = document.getElementById('partyDescription').value;
    partyData.inviteMessage = document.getElementById('inviteMessage').value;
  
    displayPartyInfo();
  });
  
  function displayPartyInfo() {
    document.getElementById('displayDate').textContent = `📅 Date: ${partyData.date}`;
    document.getElementById('displayDesc').textContent = `🎈 ${partyData.description}`;
    document.getElementById('displayMessage').textContent = `💌 ${partyData.inviteMessage}`;
  
    document.getElementById('inviteSection').classList.remove('hidden');
    document.getElementById('guestListSection').classList.remove('hidden');
  }
  
  document.getElementById('guestForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
  
    if (firstName && lastName) {
      const guest = { firstName, lastName };
      partyData.guests.push(guest);
      updateGuestList();
      document.getElementById('guestForm').reset();
    }
  });
  
  function updateGuestList() {
    const list = document.getElementById('guestList');
    list.innerHTML = '';
    partyData.guests.forEach((guest, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${guest.firstName} ${guest.lastName}`;
      list.appendChild(li);
    });
  }
  