export default {
    async fetch(request: Request) {
        return Response.json({ time: Date.now() },
            {
                headers:
                {
                    'content-type': 'application/json',
                    'x-datacenter': request.headers.get('x-vercel-id')
                }
            });
    },
};
