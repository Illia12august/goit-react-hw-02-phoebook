export default function ListOfContacts(contacts) {
    return (
      <ul>
        {contacts.contacts.contacts.map(contItem => {
          const { id, name, num } = contItem;
          return (
            <li key={id}>
              <p>
                {name}: {num}
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
  