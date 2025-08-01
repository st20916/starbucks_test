# 2025.07.31
## 용어
* build
	- Compile / 제품화
	- `--public-url .` 명시 안 할 시?
		- 모든 경로가 root 아래로 설정되어 깨짐

* deploy
	- 배포 


---


## 통신, 데이터 관련 용어
* fulfilled
	- 대기 상태

* dispatch
	- 촉발 함수
	- 즉, 전달, 전송해주는 것

* resolve
	- 통신 성공 시,
	
* reject
	- 통신 실패 시,


---


## Github 개념
1. 저장소
	- 폴더
2. 페이지
	- Repository 내 `web`에서 읽어들일 수 있게끔 변환된 공유 페이지

```
아래의 과정은 github를 가입했다는 가정 하에 진행
```
## Git 설치
1. Git bash 설치
	- [https://git-scm.com/downloads/win] 접속
	- Standalone Installer 에서 1번째 클릭
2. 다운로드 파일 실행
	- Only Show new Options 체크 후 Next
3. 다운로드 완료 후, Finish
4. cmd 창 또는 git bash 에서 `git --version` Enter

### 4번 과정에서 Git 명령어 안 먹힐 때 ?
* 권한 설정
	1. window
	2. PowerShell 관리자 실행
	3. get-executionpolicy
		* 보통, `restricted`
		* `RemoteSigned` 으로 변경해줘야 함.
		1. `set-executionpolicy 'RemoteSinged'` 입력
		2. Y 입력
		3. `get-executionpolicy` 입력


## Git 설정
1. `관리자 권한`으로 실행
2. `git config --list` :: 사용자 설정
	- 최초 설정 시, `user.name`과 `user.email` 없음
		- 없으면 에러
		- 설정 시, user.name은 github 이름
		- user.email은 github 아이디
	- `git config -g user.name "github 이름"`
	- `git config -g user.email "github 가입한 이메일"`
		- 즉, github 아이디
3. 잘못 입력 시, 위 대로 다시 입력하면 덮어써짐.
4. `git config --list`로 다시 확인


## Repository 생성
1. github 접속
2. 자신의 Repository 에서 `New` 클릭
3. Repository Name 작성
4. `Public` / `Private` 설정
	- Public
		- 공개
		- 페이지 생성 가능
	- Private
		- 비공개
		- 페이지 생성 불가능
5. Add a README file 은 체크 해제
6. `.gitignore` :: 제외할 항목
	- node_modules
	- dist
	- .env
	- .cache
	- .DS_Store :: Mac 에서 생성되는 폴더


## Git 명령어
* git 초기화 (최초 1번만 실행) :: 최초에는 master 라고 되어있음.
	```
	git init 
	```

* 상태 확인
	```
	git status
	```

* 모든 파일 추가
	```
	git add .
	```

* 커밋 시, 메시지 작성 후 커밋
	```
	git commit -m "버전 관리에 필요한 메시지 내용"
	```

* main 이란 이름으로 repository name 변경 (최초 1번만 실행)
	```
	git branch -M main
	```

* 원격 저장소로 연결 (최초 1번만 실행)
	```
	git remote add origin 'Github Repository URL'
	```
	- '' 쓸 필요 없음.

* 'main' 위치에 있는 저장소로 최신화
	```
	git push origin main
	```


## 주의점
* local 에서 수정 시, 반드시 원격 저장소로 올려줘야 함.
	```
	git push
	```

* 원격 저장소에서 업데이트 될 시, 반드시 local 로 최신화 시켜줘야 함.
	```
	git pull
	```


# 2025.08.01
* `git add` 와 `git commit` 은 한 쌍

```
git add 대상 파일
```

```
git commit -m "description"
```