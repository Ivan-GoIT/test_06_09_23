# test_06_09_23
=== GIT ===

Рабочее окружение

Вы закончили работу над задачей для клиента и у вас есть рабочий код, который был создан без использования git. Клиент создал пустой репозиторий git@example.com:example/test.git и расшалил для вас доступ.

Задание

Опишите ваши дальнейшие действия что бы ваш код появился в ветке master в репозитории git@example.com:example/test.git

Ответ

1.
	cd /DevIT/project

2.
	git init
	
3.
	git add.
	
4.
	git commit - m 'The task "Test" is complete'
	
5.
	git remote add client-repo git@example.com:examole/test.git
	
6.
	git push client-repo master
