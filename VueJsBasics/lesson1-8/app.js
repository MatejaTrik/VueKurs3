new Vue({
    el: '#app',
    data: {
        title: 'Becoming a vue ninja',
        name: 'Ryu',
        url: 'https://www.youtube.com/',
        classes: ['one','two']
    },
    methods: {
        greet(time) {
            return `Hello and good ${time}, ${this.name}`
        }
    },
})

