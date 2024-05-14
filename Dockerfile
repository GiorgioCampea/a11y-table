FROM node:alpine    
EXPOSE 3000
COPY db/db.json /opt/db.json
COPY static/* /opt/static
RUN yarn global add json-server
CMD ["npx", "json-server", "/opt/db.json", "-s", "./static"]