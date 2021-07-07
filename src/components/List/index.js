import React from 'react'
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap'

import './style.css'

const List = ({ 
    entries,
    handleDeleteEntry
}) => (
  <div>
    <ListGroup>
      {entries.map((item, index) => (
            <ListGroupItem className="list-elements" key={index}>
              <Row>
                <Col sm="10">
                    <h3>{item.journalDate}</h3> 
                    <p>{item.content}</p>
                </Col>
                <Col sm="1">
                    <Button type='submit' color='danger' onClick={() => handleDeleteEntry(item)}>
                        Delete
                    </Button>
                </Col>
              </Row>
            </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default List