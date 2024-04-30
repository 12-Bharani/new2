import React, { useState } from 'react'

import song1 from '../MusicPlayer/Music/Naa-Ready.mp3'
import song2 from '../MusicPlayer/Music/Arjunar-Villu.mp3'
import song3 from '../MusicPlayer/Music/Katchi Sera.mp3'
import song4 from '../MusicPlayer/Music/Kokkarakko.mp3'
import img1 from '../MusicPlayer/Images/ghilli.jpeg'
import img2 from '../MusicPlayer/Images/leo.jpeg'
import img3 from '../MusicPlayer/Images/varisu.jpeg'



const MusicData = () => {


const [musiclist, setMusiclist] = useState([

    {
        title:"Ajunar Villu",
        artist:"Sukhwunder",
        album:"Ghilli",
        img:'https://i.pinimg.com/736x/94/4a/5d/944a5d21faecc869d036c8260250cf48.jpg',
      
        id:"0",
    },
    {
        title:"Kokkarakko",
        artist:"Udit",
         album:"Ghilli",
       img:'https://i.pinimg.com/736x/94/4a/5d/944a5d21faecc869d036c8260250cf48.jpg',
        id:"1",
    },
    {
        title:"Naa Ready",
        artist:"Vijay",
         album:"Leo",
        img:"https://www.livemint.com/lm-img/img/2023/06/22/600x338/Actor_Vijay_1687403760315_1687403767291.jpg",
        id:"2",
    },
    {
        title:"Vaadi Vaadi",
        artist:"Vijay",
         album:"Sachin",
        img:"https://m.media-amazon.com/images/M/MV5BMzAzNmI5ZjgtYTdkMy00NDRlLWEwMTctMmFiNzc1OTlkMDFjXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
        id:"3",
    },
    {
        title:"Celebration",
        artist:"anirudh",
         album:"varisu",
       img:'https://th-i.thgim.com/public/entertainment/movies/4wbc2/article66060191.ece/alternates/FREE_1200/varisu.jpeg',
        id:"4",
    },
    {
        title:"Ranjithame",
        artist:"Vijay",
         album:"Varisu",
       img:"https://th-i.thgim.com/public/entertainment/movies/4wbc2/article66060191.ece/alternates/FREE_1200/varisu.jpeg",
        id:"5",
    },
    {
        title:"Katchi sera",
        artist:"Sai Abhyankkar",
         album:"Indie",
       img:"https://source.boomplaymusic.com/group10/M00/02/09/3cb358d3af7b40368fed2f66193f70f0_464_464.jpg",
        id:"6",
    },
    {
        title:"Meherezylaa",
        artist:"Yuvan Sankar",
         album:"Maanadu",
       img:"https://c.saavncdn.com/204/Maanaadu-Tamil-2021-20211123141819-500x500.jpg",
        id:"7",
    },
    {
        title:"Oxygen",
        artist:"Hiphop thamizha",
         album:"Kavan",
       img:"https://c.saavncdn.com/635/Kavan-Full-Tamil-2016-500x500.jpg",
        id:"8",
    },
    {
        title:"Ottrakannale",
        artist:"Haricharan",
         album:"Vel",
       img:"https://img.wynk.in/unsafe/200x200/filters:no_upscale():strip_exif():format(jpg)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/update/1589810112306/srch_sonymusic_A10328E0005779830Q.jpg",
        id:"9",
    },

   
])


return{
    musiclist
}
 
}

export default MusicData