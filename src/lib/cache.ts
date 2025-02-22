import clientPromise from '@/lib/mongodb';

let cachedScores = null;
let lastUpdated = 0;

export async function getCachedScores() {
    const now = Date.now();
    if (!cachedScores || now - lastUpdated > 60000) {
        await refreshData();
    }
    return cachedScores;
}

async function refreshData() {
    try {
        const client = await clientPromise;
        const db = client.db('test');
        const collection = db.collection('leaderboards');
        cachedScores = await collection.find({}).toArray();
        lastUpdated = Date.now();
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
            status: 500,
        });
    }
}

setInterval(refreshData, 60000);
