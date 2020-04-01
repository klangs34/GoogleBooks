import React from 'react';
import { PromiseProvider } from 'mongoose';

const Div = (props) => <div className="container border p-3" style={{ backgroundColor: '#e9ecef' }}>{props.children}</div>

export default Div;