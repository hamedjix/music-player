import { v4 as uuidv4 } from 'uuid';
function chillHop() {
  return [
    {
      id: uuidv4(),
      name: 'Roses n Flames',
      artist: 'C Y G N',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14984',
      color: ['#46305E', '#484975'],
      active: true,
    },
    {
      id: uuidv4(),
      name: 'Lonely Waves',
      artist: 'C Y G N',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14980',
      color: ['#46305E', '#484975'],
      active: false,
    },
    {
      id: uuidv4(),
      name: 'Murmuration',
      artist: 'Blue Wednesday, Shopan',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=1226',
      color: ['#018985', '#39343E'],
      active: false,
    },
    {
      id: uuidv4(),
      name: 'Sunlit',
      artist: 'Blue Wednesday, Shopan',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=1241',
      color: ['#018985', '#39343E'],
      active: false,
    },
    {
      id: uuidv4(),
      name: 'Home Court',
      artist: 'Saib',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11232',
      color: ['#4D2322', '#FCBB7A'],
      active: false,
    },
    {
      id: uuidv4(),
      name: 'Beyond Clouds',
      artist: 'Saib',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=6770',
      color: ['#4D2322', '#FCBB7A'],
      active: false,
    },
  ];
}
export default chillHop;
