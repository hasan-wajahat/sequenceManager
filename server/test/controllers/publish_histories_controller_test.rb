require 'test_helper'

class PublishHistoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @publish_history = publish_histories(:one)
  end

  test "should get index" do
    get publish_histories_url, as: :json
    assert_response :success
  end

  test "should create publish_history" do
    assert_difference('PublishHistory.count') do
      post publish_histories_url, params: { publish_history: { comment: @publish_history.comment, image: @publish_history.image, publisher: @publish_history.publisher, short: @publish_history.short, tasktype: @publish_history.tasktype } }, as: :json
    end

    assert_response 201
  end

  test "should show publish_history" do
    get publish_history_url(@publish_history), as: :json
    assert_response :success
  end

  test "should update publish_history" do
    patch publish_history_url(@publish_history), params: { publish_history: { comment: @publish_history.comment, image: @publish_history.image, publisher: @publish_history.publisher, short: @publish_history.short, tasktype: @publish_history.tasktype } }, as: :json
    assert_response 200
  end

  test "should destroy publish_history" do
    assert_difference('PublishHistory.count', -1) do
      delete publish_history_url(@publish_history), as: :json
    end

    assert_response 204
  end
end
