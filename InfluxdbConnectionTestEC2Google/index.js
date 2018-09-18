const Influx = require('influx');

const influx = new Influx.InfluxDB('http://admin:admin@35.238.180.21:8086/database')

  influx.writePoints([
    {
      measurement: 'Sensor1',
      // add in the power value below
      fields: { Power: 001,
                Voltage: 11

              },
      // add in the correct timestamp as a date object
      timestamp: new Date(),
    },
  ], {
    database: 'SolarDC',
  });
