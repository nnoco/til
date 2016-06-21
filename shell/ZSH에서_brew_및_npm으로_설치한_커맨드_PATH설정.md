### zsh에서 brew 및 npm으로 설치한 커맨드의 PATH 설정
  
2016-06-22 03:42  
---
electron을 설치 후 zsh 환경에서 electron을 찾을 수 없어 구글링 해보니
기존 `~/.bashrc` 파일이 아닌 `~.zshrc` 파일에 PATH를 설정해주어야 한다.
- brew: `export PATH=/usr/local/bin:$PATH`
- npm: `export PATH=/usr/local/share/npm/bin:$PATH`
