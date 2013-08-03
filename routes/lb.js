var routes = [
    {
        desc: 'LB main page',
        method: 'get',
        route: '/lb',
        redirect: '/lb/main'
    },
    {
        desc: 'LB main page',
        method: 'get',
        route: '/lb/main',
        render: 'lb/main'
    }
];


module.exports.routes = routes;
