import React from 'react';
import cs from './styles';
import LibraryQuery from '';

const UserInfo = () => (
  <div className={cs.userInfo}>
    `👋`
    <Query query={LibraryQuery}>
      {({ data, loading }) => {
        if (loading) return '...Loading';
        if (!data.me) {
          // Show login form
          return;
        }

        const { fullName } = data.me;
        return <div className={cs.info}>😈 {fullName}</div>;
      }}
    </Query>
  </div>
);

export default UserInfo;
