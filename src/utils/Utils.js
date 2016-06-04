export function getIcon(participantType) {
  switch (participantType) {
    case 'resident':
      return 'http://compost-crossing.herokuapp.com/public/images/icon_resident.svg';
    case 'composter':
      return 'http://compost-crossing.herokuapp.com/public/images/icon_composter.svg';
    case 'farmer':
      return 'http://compost-crossing.herokuapp.com/public/images/icon_farmer.svg';
  }
}
