FROM centos:latest 

RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash - 
RUN yum install -y nodejs
RUN mkdir Fastcampus-api-deploy

COPY ./ Fastcampus-api-deploy/

WORKDIR Fastcampus-api-deploy

RUN npm install

EXPOSE 3000

CMD ["node", "bin/www"]
