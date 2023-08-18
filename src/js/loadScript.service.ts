export class LoadScript {
    public loadScript(url: string) {
        const script = document.createElement('script');

        script.src = url;
        script.async = false;

        document.body.appendChild(script);
        document.body.removeChild(script);


    }


    public loadJS() {
        this.loadScript('js/purecounter/purecounter_vanilla.js');

        this.loadScript('js/aos/aos.js');

        this.loadScript('js/bootstrap/js/bootstrap.bundle.min.js');

        this.loadScript('js/glightbox/js/glightbox.min.js');

        this.loadScript('js/swiper/swiper-bundle.min.js');

        this.loadScript('js/typed.js/typed.umd.js');

        this.loadScript('js/waypoints/noframework.waypoints.js');

        this.loadScript('js/main.js');


    }

}