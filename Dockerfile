FROM centos:latest # 해당 컨테이너는 centos:latest 이미지를 기반으로 실행됩니다.

RUN # node.js v8.x / NPM 코드 다운로드
RUN # yum 레포지토리를 통해 node.js 및 npm 설치
RUN mkdir Fastcampus-api-deploy

COPY ./ # 해당 프로젝트 코드들을 컨테이너 내로 복사(컨테이너 내 경로 입력, 위에서 mkdir 명령어를 실행하여 디렉토리가 생성됨)

WORKDIR Fastcampus-api-deploy

RUN # WORKDIR을 통해 Fastcampus-api-deploy 경로로 이동하여 작업을 수행합니다. 해당 API 프로젝트에서 필요한 모듈들을 다운로드해야 합니다.

# 해당 WAS는 8080포트가 linsten됩니다. 컨테이너 내에서 사용하는 포트와 외부(host)에 요청이 들어오는 포트를 매핑해주기 위해 
# Dockerfile 내에서 어떤 키워드를 통해 포트를 오픈할 수 있습니다.

CMD # 기존에 VM(EC2)에서 WAS를 구동할 땐 PM2라는 프로세스 매니저를 통해 백그라운드로 실행하였습니다. 
# 컨테이너 내에서 실행되는 프로그램은 foreground 형태로 실행되어야합니다.