import React, { useState } from 'react';
import styles from './EventRegistration.scss'
const eventsData = {
  "Bug Busters": { minParticipants: 1, maxParticipants: 2, maxTeamSize: 2, fee: 75 },
  "Technova": { minParticipants: 2, maxParticipants: 5, maxTeamSize: 5, fee: 200 },
  "Diplomatrix": { minParticipants: 2, maxParticipants: 3, maxTeamSize: 3, fee: 50 },
  "Nerf": { minParticipants: 1, maxParticipants: 1, maxTeamSize: 1, fee: 50 },
  "Suit up": { minParticipants: 2, maxParticipants: 4, maxTeamSize: 4, fee: 200 }
};

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({});
  const [bill, setBill] = useState(null);

  const handleEventChange = (eventName) => {
    setFormData((prevData) => ({
      ...prevData,
      [eventName]: Array(eventsData[eventName].minParticipants).fill({
        name: '',
        branch: '',
        contact: '',
        college: '',
        teamName: '',
        email: '',
      }),
    }));
  };

  const handleInputChange = (eventName, index, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [eventName]: prevData[eventName].map((participant, i) =>
        i === index ? { ...participant, [field]: value } : participant
      ),
    }));
  };

  const handleAddParticipant = (eventName) => {
    const eventInfo = eventsData[eventName];
    if (
      formData[eventName].length < eventInfo.maxTeamSize &&
      formData[eventName].length < eventInfo.maxParticipants
    ) {
      setFormData((prevData) => ({
        ...prevData,
        [eventName]: [
          ...prevData[eventName],
          {
            name: '',
            branch: '',
            contact: '',
            college: '',
            teamName: prevData[eventName][0].teamName,
            email: '',
          },
        ],
      }));
    } else {
      alert(`Maximum team size reached for ${eventName}`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if minimum participants are added for each event
    for (const eventName in formData) {
      for (const participant of formData[eventName]) {
        for (const key in participant) {
          if (!participant[key]) {
            alert(`Please fill in all fields for ${eventName}`);
            return;
          }
        }
      }
    }
    // Create object for the bill
    const billData = {
      participants: formData,
      totalBill: calculateTotalBill(formData),
    };
    setBill(billData);
  };

  const calculateTotalBill = (participants) => {
    let total = 0;
    for (const eventName in participants) {
      const eventInfo = eventsData[eventName];
      total += participants[eventName].length * eventInfo.fee;
    }
    return total;
  };

  return (
    <div className={styles.formContainer}>
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {Object.keys(eventsData).map((eventName) => (
          <div key={eventName}>
            <input
              type="checkbox"
              id={eventName}
              name={eventName}
              onChange={(e) => {
                if (e.target.checked) {
                  handleEventChange(e.target.name);
                } else {
                  setFormData((prevData) => {
                    const updatedData = { ...prevData };
                    delete updatedData[e.target.name];
                    return updatedData;
                  });
                }
              }}
            />
            <label htmlFor={eventName}>
              {eventName} - {eventsData[eventName].fee} per person
            </label>
            {formData[eventName] &&
              formData[eventName].map((participant, index) => (
                <div key={index}>
                  <h4>Participant {index + 1}</h4>
                  <input
                    type="text"
                    placeholder="Name"
                    value={participant.name}
                    onChange={(e) =>
                      handleInputChange(eventName, index, 'name', e.target.value)
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Branch"
                    value={participant.branch}
                    onChange={(e) =>
                      handleInputChange(eventName, index, 'branch', e.target.value)
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Contact Number"
                    value={participant.contact}
                    onChange={(e) =>
                      handleInputChange(eventName, index, 'contact', e.target.value)
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="College Name"
                    value={participant.college}
                    onChange={(e) =>
                      handleInputChange(eventName, index, 'college', e.target.value)
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    value={participant.email}
                    onChange={(e) =>
                      handleInputChange(eventName, index, 'email', e.target.value)
                    }
                    required
                  />
                  {index === 0 && (
                    <input
                      type="text"
                      placeholder="Team Name"
                      value={participant.teamName}
                      onChange={(e) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          [eventName]: prevData[eventName].map((p) => ({
                            ...p,
                            teamName: e.target.value,
                          })),
                        }))
                      }
                      required
                    />
                  )}
                </div>
              ))}
            <button onClick={() => handleAddParticipant(eventName)}>
              Add Participant
            </button>
          </div>
        ))}
        <br />
        <button type="submit">Submit</button>
      </form>
      {bill && (
        <div>
          <h2>Bill</h2>
          <pre>{JSON.stringify(bill, null, 2)}</pre>
        </div>
      )}
    </div>
    </div>
  );
};

export default EventRegistrationForm;
