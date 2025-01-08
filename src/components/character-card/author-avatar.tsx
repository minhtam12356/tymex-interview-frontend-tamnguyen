import { Avatar } from 'antd';
import { IAuthor } from '@/common';
import { Image } from '@/components/image';
import { UserOutlined } from '@ant-design/icons';
import bodyStyles from '@/styles/modules/body.module.css';

export const AuthorAvatar = (props: { author: IAuthor }) => {
  const { author } = props;

  return (
    <div className={bodyStyles['character-information-author-avatar']}>
      <Avatar
        icon={
          author?.avatar ? (
            <Image
              style={{ width: 32, height: 32 }}
              src={author?.avatar}
              alt={author.name}
            />
          ) : (
            <UserOutlined />
          )
        }
      />
      <div className={bodyStyles['character-information-author-verify']}>
        <Image
          style={{ width: 12, height: 12 }}
          src={author?.verified ? '/verified-green.svg' : '/verified-red.svg'}
          alt={author.name}
        />
      </div>
    </div>
  );
};
