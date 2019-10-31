import React from 'react';
import cs from './styles';
// import Query from 'graphql';

const UserInfo = () => (
  <div className={cs.userInfo}>👋</div>

  <Query query={Me}>
    {({ data, loading }) => {
      if (loading) return "...Loading";
      if (!data.me) {
        // Show login form
        return;
      }

      const { fullName } = data.me;
      return <div className={cs.info}>😈 {fullName}</div>;
    }}
  </Query>

);

export default UserInfo;
