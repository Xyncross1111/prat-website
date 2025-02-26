import React from 'react';

interface LyricsProps {
  title: string;
  verses: string[][];
  chorus?: string[];
  bridge?: string[];
}

const Lyrics: React.FC<LyricsProps> = ({ title, verses, chorus, bridge }) => {
  return (
    <div className="lyrics-container px-4 py-6 max-w-sm mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        {/* <h2 className="text-lg text-gray-600">{artist}</h2> */}
      </div>

      <div className="space-y-6">
        {verses.map((verse, verseIndex) => (
          <React.Fragment key={`verse-${verseIndex}`}>
            <div className="verse">
              {verse.map((line, lineIndex) => (
                <p key={`verse-${verseIndex}-line-${lineIndex}`} className="mb-1">
                  {line}
                </p>
              ))}
            </div>
            
            {/* Add chorus after certain verses if provided */}
            {chorus && (verseIndex === 0 || verseIndex % 2 === 0) && (
              <div className="chorus pl-4 border-l-2 border-blue-500">
                {chorus.map((line, lineIndex) => (
                  <p key={`chorus-line-${lineIndex}`} className="mb-1 font-medium">
                    {line}
                  </p>
                ))}
              </div>
            )}
            
            {/* Add bridge after specific verse if provided */}
            {bridge && verseIndex === Math.floor(verses.length / 2) - 1 && (
              <div className="bridge pl-4 border-l-2 border-purple-500">
                {bridge.map((line, lineIndex) => (
                  <p key={`bridge-line-${lineIndex}`} className="mb-1 italic">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Lyrics;