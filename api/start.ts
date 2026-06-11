export default {
    async fetch(request: Request) {
        return Response.json({ time: performance.now() * 1000 }, {
            headers: {
                'content-type': 'application/json',
                'x-datacenter': request.headers.get('x-vercel-id')
            }
        });
    },
};
