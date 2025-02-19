import clientPromise from '@/lib/mongodb';

export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db('test');
        const collection = db.collection('leaderboards');

        const users = await collection.find({}).toArray();

        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
            status: 500,
        });
    }
}