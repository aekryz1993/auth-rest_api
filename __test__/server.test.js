// import net from 'net';
import http from 'http';

// import app from '../server/app'
// import { testHostServer } from '../server/config/config.server';

// const server = http.createServer(app)

// const portInterval = (p) => !isNaN(p) && p > 0 && p < 65536

// describe("Test the server parameters", () => {
//     test("Port must be a number", () => {
//         expect(typeof testHostServer.port).toBe('number');
//     });
//     test("Port must be a positive integer between 1 and 65535", () => {
//         expect(portInterval(testHostServer.port)).toBe(true);
//     });
//     test("Host must be a string", () => {
//         expect(typeof testHostServer.host).toBe('string');
//     });
//     test("Host must be a valid IPv4 address", () => {
//         expect(net.isIPv4(testHostServer.host)).toBe(true);
//     });

// });

describe("Test the server listening ", () => {
    test('should handle error', function() {
        const mError = new Error('Error');
        const mServer = {
            listen: jest.fn().mockReturnThis(),
            on: jest.fn().mockImplementationOnce((event, handler) => {
                handler(mError)
            }),
        };
        const createServerSpy = jest.spyOn(http, 'createServer').mockImplementationOnce(() => mServer);
        // const logSpy = jest.spyOn(console, 'log');
        require('../server')
        expect(createServerSpy).toBeCalledTimes(1);
        expect(mServer.listen).toBeCalledWith(3000, "localhost");
        expect(mServer.on).toBeCalledWith('error', expect.any(Function));
        expect(mServer.on).toBeCalledWith('listening', expect.any(Function)); 
        // expect(logerrorSpy).toBeCalledWith(mError)
        // expect(logSpy).toBeCalledWith('successfully connected') 
    })
});