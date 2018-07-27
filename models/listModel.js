module.exports = {
    /**
     * @name albumJsonList
     * @type {Array}
     * @description 앨범 리스트 더미 데이터
     */
    albumJsonList: [
        {
            header          : 'api-album-build-test1',
            description     : 'api-album-description1',
            imgUrl          : 'https://s3.ap-northeast-2.amazonaws.com/fastcampus-s3-test-bucket/fastcampusImg.png'
        },
        {
            header          : 'api-album-test2',
            description     : 'api-album-description2',
            imgUrl          : 'https://s3.ap-northeast-2.amazonaws.com/fastcampus-s3-test-bucket/subwayImg.png'
        },
    ],

    /**
     * @api public
     * @name jsonList
     * @description albumJsonList getter
     * @return {Array}
     */
    get jsonList() {
        return this.albumJsonList;
    },
};