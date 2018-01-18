import React from 'react';
import { Table } from 'react-bootstrap';

const OrderSummary = () => {
    return(
                        <div className="box" id="order-summary">
                            <div className="box-header">
                                <h3>Order summary</h3>
                            </div>
                            <p className="text-muted">Shipping and 
                                additional costs 
                                are calculated based on the values 
                                you have entered.
                            </p>

                            <div className="table-responsive">
                                <Table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Order subtotal</td>
                                            <th>$446.00</th>
                                        </tr>
                                        <tr>
                                            <td>Shipping and handling</td>
                                            <th>$10.00</th>
                                        </tr>
                                        <tr>
                                            <td>Tax</td>
                                            <th>$0.00</th>
                                        </tr>
                                        <tr className="total">
                                            <td>Total</td>
                                            <th>$456.00</th>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                        </div>
    );
}

export default OrderSummary;