--Find the item that has minimum weight
SELECT *,MIN(WEIGHT) AS MIN_WEIGHT FROM ITEMS; 

--Find the different warehouses in “Pune”
SELECT * FROM WAREHOUSES WHERE CITIES.CITY LIKE "%PUNE%" JOIN ON WAREHOUSES.CITY_ID = CITIES.ID

--Find the details of items ordered by a customer “Mr. Patil”.
SELECT * FROM ORDERS WHERE CUSTOMER.CNAME LIKE "%Mr. Patil%" JOIN ON ORDERS.CUSTOMER_ID = CUSTOMER.ID

--Find a Warehouse which has maximum stores


--Find an item which is ordered for a minimum number of times



--Find the detailed orders given by each customer.
SELECT * FROM ORDERS  JOIN ORDERS.CUSTOMER_ID = CUSTOMER.ID;