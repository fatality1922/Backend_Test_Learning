module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  const [ firstName, lastName, test ] = fullName.split(' ');
  if(!firstName || !lastName || fullName.length == 0) return 'Error';
  if(fullName.split(' ') === firstName, lastName, test) return 'Error';
  return firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0].toUpperCase + lastName.slice(1).toLowerCase() ;
};
