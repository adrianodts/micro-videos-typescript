FROM node:14.15.4-slim

RUN usermod -o -u 1001 node

USER node

WORKDIR /home/node/app

#CMD [ "tail", "-f", "/dev/null" ]

CMD [ "sh", "-c",  "npm install && tail -f /dev/null" ]