export default {
    async fetch(request: Request) {
        return Response.json({ time: process.hrtime.bigint() / 1000n; },
            {
                headers:
                {
                    'content-type': 'application/json',
                    'x-datacenter': request.headers.get('x-vercel-id')
                }
            });
    },
};
