# Reackathon Landing Page

Landing Page for the first React Hackathon in Vietnam, on 17th & 18th December 2016 in Ho Chi Minh City

Mostly developed with React Components from [neal-react](http://www.github.com/dennybritz/neal-react).

Live website: [reackathon.8bitrockr.com](http://reackathon.8bitrockr.com)

## Develop locally

Transpile the Javascript using Babel and watch for changes:

```bash
git clone https://github.com/dennybritz/neal-sample.git
cd neal-sample
npm install
npm run watch
```

Run with webpack:

```bash
npm run serve
```

Run inside a docker container:

```
docker run -p 3000:80 -v "$PWD"/public:/usr/local/apache2/htdocs/ httpd:2.4
```

Visit `http://<YOUR_DOCKER_MACHINE_IP>:3000`
