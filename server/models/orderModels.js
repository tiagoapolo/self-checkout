/*
 * File: menuModels copy.js
 * Project: self-checkout
 * File Created: Friday, 26th February 2021 9:24:17 am
 * Author: Tiago Lopes de Paiva Dionysio da Fonseca
 * -----
 * Last Modified: Friday, 26th February 2021 9:24:18 am
 * Modified By: Tiago Lopes de Paiva Dionysio da Fonseca
 * -----
 * Copyright (C) 2019-2020 Corvalent Corporation - All Rights Reserved
 * This software is licensed program property and is Proprietary and Confidential.
 * Unauthorized copying of this file via any medium is strictly prohibited unless
 * prior written permission has been obtained by Corvalent Corporation.
 * In addition, the look and feel of this software as well as the user interface
 * design is also Copyright ©.
 * Notice:  This software is not open source.
 * This software is subject to the Corvalent Software License Agreement.
 * You should have received a copy of this license with the software.
 * If not, please write to: sales@corvalent.com
 * All information contained herein is, and remains, the property of
 * Corvalent Corporation and its suppliers, if any.  This software may also
 * be covered by U.S. and Foreign Patents, patents in progress, and are
 * protected by trade secret or copyright law
 */

const orderDB = {
  lastOrderIndex: 0,
  orders: [],
};

const queryOrders = ({ id }) => {
  if (id) {
    return orderDB.orders.filter((order) => order.id === id);
  }
  
  return orderDB.orders;
}

const createOrder = ({ data }) => {
  if (data) {
    const newIdx = orderDB.lastOrderIndex + 1;
    orderDB.lastOrderIndex = newIdx;
    const payload = { ...data, id: newIdx };
    orderDB.orders.push(payload)
    return payload;
  }

  return new Error('Invalid data');
}

const updateOrder = ({ id, data }) => {
  const idx = orderDB.orders.findIndex((order) => order.id === id);
  orderDB.orders[idx] = data;
  return data;
}

module.exports = {
  queryOrders,
  createOrder,
  updateOrder,
}