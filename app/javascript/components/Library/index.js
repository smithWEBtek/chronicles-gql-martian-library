// app/javascript/components/Library
import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// import { LibraryQuery } from './operations.graphql';
import cs from './styles';
import UpdateItemForm from '../UpdateItemForm';

const LibraryQuery = gql`
  {
    items {
      id
      title
      user {
        email
      }
    }
  }
`;

export default () => (
  <Query query={LibraryQuery}>
    {({ data, loading }) => (
      <div>
        {loading
          ? "loading..."
          : data.items.map(({ title, id, user }) => (
              <div key={id}>
                <b>{title}</b> {user ? `added by ${user.email}` : null}
              </div>
            ))}
      </div>
    )}
  </Query>
);


const Library = () => {
  const [item, setItem] = useState(null);
  return (
    <Query query={LibraryQuery}>
      {({ data, loading }) => (
        <div className={cs.library}>
          {loading || !data.items
            ? 'loading...'
            : data.items.map(({ title, id, user, imageUrl, description }) => (
                <button
                  key={id}
                  className={cs.plate}
                  onClick={() => setItem({ title, imageUrl, id, description })}
                >
                  <div className={cs.title}>{title}</div>
                  <div>{description}</div>
                  {imageUrl && <img src={imageUrl} className={cs.image} />}
                  {user ? (
                    <div className={cs.user}>added by {user.email}</div>
                  ) : null}
                </button>
              ))}

          {item !== null && (
            <UpdateItemForm
              id={item.id}
              initialTitle={item.title}
              initialDescription={item.description}
              initialImageUrl={item.imageUrl}
              onClose={() => setItem(null)}
            />
          )}
        </div>
      )}
    </Query>
  );
};
