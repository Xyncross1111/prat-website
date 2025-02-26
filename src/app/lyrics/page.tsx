'use client';

import { useState } from 'react';
import Lyrics from '@/components/lyrics';

const LyricsPage = () => {
    const songs = {
        channave: {
            title: "Channa Ve",
            artist: "Akhil Sachdeva & Mansheel Gujral",
            verses: [
                // Verse 1
                [
                    "Kyun dikhe mujhe tu sirhaane mere",
                    "Soch ke teri baatein hum muskurane lage",
                    "Haaye haaye haaye!",
                    "Kyun dikhe mujhe tu sirhaane mere",
                    "Soch ke teri baatein hum muskurane lage"
                ],
                // Verse 2
                [
                    "Dil se nikal gaya hai lafzon pe aane lage",
                    "Kaisi teri khumari hai hum gungunaane lage"
                ],
                // Verse 3
                [
                    "O ho...",
                    "Haaye bhull gaya jag sara, tere naal pyar hai",
                    "Saari saari raat mujhe tera intezaar hai"
                ],
                // Verse 4
                [
                    "O.. ho...",
                    "Ho bhull gaya jag saara tere naal pyaar hai",
                    "Saari saari raat mujhe tera intezaar hai"
                ],
                // Verse 5
                [
                    "Akhiyon mein dekho meri, meri hi pukar hai",
                    "Tu meri duaa mein base itni si guhaar hai"
                ],
                // Verse 6
                [
                    "Dil se nikal gaya hai Lafzon pe aane lage",
                    "Kaisi teri khumari hai Hum gungunaane lage"
                ],
            ],
            chorus: [
                "Channa ve... Channa ve...",
                "Kuch toh hai tere mere darmiyan kyun lage",
                "Channa ve... Channa ve...",
                "Kuch toh hai tere mere darmiyan kyun lage",
                "Channa ve..."
            ],
            bridge: [
                "Channa ve, Channa ve..",
                "Channa ve, Channa ve, Channa ve!",
                "Kuch toh hai tere mere darmiyan kyun lage",
                "Channa ve... Channa ve!",
                "Kuch toh hai tere mere darmiyan kyun lage",
                "Channa ve... Channa ve..."
            ]
        },

        sunmerehumsafar: {
            title: "Sun Mere Humsafar",
            artist: "Tulsi Kumar & Arijit Singh",
            verses: [
                // Verse 1
                [
                    "Sun mere humsafar",
                    "Kya tujhe itni si bhi khabar",
                    "Sun mere humsafar",
                    "Kya tujhe itni si bhi khabar",
                    "Ki teri saansein chalti jidhar",
                    "Rahunga bas wahin umrr bhar",
                    "Rahunga bas wahin umrr bhar, haaye"
                ],
                // Verse 2
                [
                    "Jitni haseen ye mulakatein hain",
                    "Unse bhi pyari teri baatein hain",
                    "Baaton mein teri jo kho jaate hain",
                    "Aaun na hosh mein main kabhi",
                    "Baahon mein hai teri zindagi, haaye"
                ],
                // Verse 3
                [
                    "Main toh yun khada",
                    "Kis soch mein pada tha",
                    "Kaise jee raha tha main deewana",
                    "Chhup ke se aake tune",
                    "Dil mein samaa ke tune",
                    "Chhed diya kaisa ye fasaana"
                ],
                // Verse 4
                [
                    "O… muskurana bhi tujhi se seekha hai",
                    "Dil lagane ka tu hi tareeka hai",
                    "Aitbaar bhi tujhi se hota hai",
                    "Aaun na hosh mein main kabhi",
                    "Baahon mein hai teri zindagi, haaye"
                ]
            ],
            chorus: [
                "Sun mere humsafar",
                "Kya tujhe itni si bhi khabar",
                "Ki teri saansein chalti jidhar",
                "Rahunga bas wahin umrr bhar",
                "Rahunga bas wahin umrr bhar, haaye"
            ]
        },

        minterabanjaunga: {
            title: "Main Tera Ban Jaunga",
            artist: "Akhil Sachdeva & Tulsi Kumar",
            verses: [
                // Intro/Verse 1
                [
                    "[Intro: Akhil Sachdeva & Tulsi Kumar]",
                    "Meri raahein tere tak hain",
                    "Tujhpe hi to mera haq hai",
                    "Ishq mera tu beshaq hai",
                    "Tujhpe hi to mera haq hai"
                ],
                // Verse 2
                [
                    "[Verse: Tulsi Kumar & Akhil Sachdeva]",
                    "Lakhaan ton juda main hoyi teri ḳhaatir",
                    "Tu hi manzil dil tera musaafir",
                    "Lakhaan ton juda main hoya teri ḳhaatir",
                    "Tu hi manzil main tera musaafir",
                    "Rab nu bhula betha tere karke",
                    "Main ho gaya qaafir"
                ]
            ],
            chorus: [
                "[Chorus: Akhil Sachdeva]",
                "Saath chhodunga na tere pichhe aaunga",
                "Chheen lunga ya Khuda se maang laaunga",
                "Tere naal taqdeeran likhwaunga",
                "Main tera ban jaaunga",
                "Main tera ban jaaunga",
                "",
                "Sonh teri main kasam yehi khaunga",
                "Keetey waadeya nu umraan nibhaunga",
                "Tujhe har vaari apna banaunga",
                "Main tera ban jaaunga",
                "Main tera ban jaaunga"
            ],
            bridge: [
                "[Chorus: Akhil Sachdeva]",
                "Tere liye main jahaan se takraunga",
                "Sab kuch khoke tujhko hi paaunga",
                "Dil banke main dil dhadkaunga",
                "Main tera ban jaaunga",
                "Main tera ban jaaunga",
                "",
                "Sonh teri main kasam yehi khaunga",
                "Keetey waadeya nu umraan nibhaunga",
                "Tujhe har waari apna banaunga",
                "Main tera ban jaaunga",
                "Main tera ban jaaunga"
            ]
        }
    };

    const [selectedSong, setSelectedSong] = useState('channave');

    return (
        <div className="min-h-screen bg-black relative">
            <div className="bg-black shadow-sm sticky top-12 z-10">
                <div className="max-w-sm mx-auto px-4 py-3">
                    <select
                        value={selectedSong}
                        onChange={(e) => setSelectedSong(e.target.value)}
                        className="w-full top-12 p-2 border rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="channave">Channa Ve</option>
                        <option value="sunmerehumsafar">Sun Mere Humsafar</option>
                        <option value="minterabanjaunga">Main Tera Ban Jaunga</option>
                    </select>
                </div>
            </div>

            <div className="pt-4">
                <Lyrics {...songs[selectedSong]} />
            </div>
        </div>
    );
};

export default LyricsPage;