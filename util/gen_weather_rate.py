#!/usr/bin/env python

import csv
import coinach
import os

_OUTPUT_FILE = "weather_rate.ts"


def parse_data(csvfile):
    all_rates = {}
    reader = csv.reader(csvfile)
    # skip the first three header lines
    next(reader)
    next(reader)
    next(reader)

    for row in reader:
        sum = 0
        weathers = []
        rates = []
        for i in range(1, len(row), 2):
            weather_name = row[i]
            if not weather_name:
                break
            weathers.append(weather_name)
            sum += int(row[i + 1])
            rates.append(sum)
        # add leading zeroes so they sort properly.
        all_rates["%04d" % int(row[0])] = {
            "weathers": weathers,
            "rates": rates,
        }
    return all_rates


def update(reader, writer):
    data = reader.exd("WeatherRate")
    all_rates = parse_data(data)

    weather_rate_type = """type WeatherRateType = {
  [zoneId: number]: {
    rates: number[];
    weathers: string[];
  };
};"""

    writer.writeTypeScript(
        os.path.join("resources", _OUTPUT_FILE),
        os.path.basename(os.path.abspath(__file__)),
        weather_rate_type,
        "WeatherRateType",
        all_rates,
    )


if __name__ == "__main__":
    # TODO: make an arg parser for non-default paths
    reader = coinach.CoinachReader(verbose=True)
    writer = coinach.CoinachWriter(verbose=True)
    update(reader, writer)
