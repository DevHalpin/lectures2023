import prisma from '../../../../prisma/client'

export async function GET(req: Request, res: Response) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    if (!userId) return Response.json({ error: 'User ID is required' });

    try {
        const list = await prisma.wishlist.findMany({
            where: {
                userId: parseInt(userId)
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return Response.json({list});
    } catch (error) {
        return Response.json({ error: `An unexpected error occurred: ${error}`});
    }
}