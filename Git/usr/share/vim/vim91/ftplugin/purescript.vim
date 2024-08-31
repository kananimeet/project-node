" Vim filetype plugin
" Language:	purescript
" Maintainer:	Riley Bruins <ribru17@gmail.com>
" Last Change:	2024 May 19

if exists('b:did_ftplugin')
  finish
endif
let b:did_ftplugin = 1

setl comments=s1f:{-,mb:\ ,ex:-},:--\ \|,:--
setl commentstring=--\ %s

let b:undo_ftplugin = 'setl com< cms<'
