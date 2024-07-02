import React, { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';

const ageGroups = [
  'Elementary School Student',
  'Middle School Student',
  'High School Student',
  'Parent/Guardian',
  'Teacher',
  'Administrator',
];

const ResponsiveForm = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here if needed
    console.log(userData);
    // Optionally reset userData after submission
    // setUserData({ name: '', age: '', ageGroup: '' });
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg "
        style={{ maxWidth: '80%' }}
      >
        <h2 className="text-2xl font-semibold mb-4">How old are you?</h2>
        <div className="mb-4 ">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-1">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={userData.age || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border-2 border-pmmBlue focus:outline-none "
            placeholder="Enter your age"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ageGroup" className="block text-gray-700 font-medium mb-1">
            Age Group:
          </label>
          <select
            id="ageGroup"
            name="ageGroup"
            value={userData.ageGroup || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border-2 border-pmmBlue focus:outline-none"
            required
          >
            <option value="" disabled hidden>
              Select your age group
            </option>
            {ageGroups.map((group, index) => (
              <option key={index} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default ResponsiveForm;
