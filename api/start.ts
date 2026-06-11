export default {
    async fetch(request: Request) {
        return Response.json({ time: Date.now() * 1000 }, {
            headers: {
                'content-type': 'application/json',
            }
        });
    },
};
