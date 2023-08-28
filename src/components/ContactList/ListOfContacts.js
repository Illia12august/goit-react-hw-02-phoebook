export default function ListOfContacts({contacts, onDelete}) {
    return (
      <>
      <ul>
        {contacts.map(contItem => {
          const { id, name, number } = contItem;
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" onClick={() => onDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      </>
    );
  }
  