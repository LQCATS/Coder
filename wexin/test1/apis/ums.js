import request from '../utils/request';
export default {
  bookingMeetingRoom: params => request.post('/api/bookingMeetingRoom', params),
}