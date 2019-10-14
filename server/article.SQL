create database egg_article;
use egg_article;


create table article(
    id int(10) not null auto_increment,
    img text default null comment '缩略图',
    title varchar(80) default null comment '文章标题',
    summary varchar(300) default null comment '文章简介',
    content text default null comment '文章内容',
    createTime timestamp default null comment '发布时间',
    primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '文章表';


insert into article(title,img,summary,content,createTime) values('谢谢你来过','http://pic1.win4000.com/wallpaper/6/51e35bd76cd74.jpg','人的一生会遇到两个人，一个惊艳了时光，一个温柔了岁月','一生中至少该有一次，为了某个人而忘记了自己，不求结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇见你。”我不知道自己是何等的幸运能在茫茫人海中与你相遇？我也不知道你的出现是恩赐还是劫？但总归要说声“谢谢你，谢谢你曾来过……','2019-08-10 10:20:20');