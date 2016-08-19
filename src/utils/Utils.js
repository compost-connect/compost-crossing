import {BASE_URL} from '../constants.js';

export function getIcon(participantType) {
  switch (participantType) {
    case 'resident':
      return `${BASE_URL}/public/images/icon_resident.svg`;
    case 'composter':
      return `${BASE_URL}/public/images/icon_composter.svg`;
    case 'farmer':
      return `${BASE_URL}/public/images/icon_farmer.svg`;
  }
}
