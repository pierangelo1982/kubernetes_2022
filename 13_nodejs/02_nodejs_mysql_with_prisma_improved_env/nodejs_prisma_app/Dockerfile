FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
#RUN npm install -g typescript
#RUN npm install -g prisma
RUN npm install
COPY . /usr/src/app
# timezone env with default
ENV TZ Europe/Rome
EXPOSE 3000
#CMD [ "./entrypoint.sh" ]
ENTRYPOINT ["sh", "./entrypoint.sh"]
