var routes = [
	{
    	desc: 'render route',
    	method: 'get',
        route: '/render',
        protected: true,
        render: 'pagetorender'
    },
	{
    	desc: 'redirect route',
    	method: 'put',
        route: '/redirect',        
        redirect: '/pagetoredirect'
    },
	{
    	desc: 'callback route',
    	method: 'post',
        route: '/callback',
        protected: false,
        callback: function(req, res){}
    }
];


module.exports.routes = routes;
