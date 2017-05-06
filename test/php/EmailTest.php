<?php
use PHPUnit\Framework\TestCase;
use myapp\Email;

/**
 * @coversDefaultClass myapp\Email
 */
final class EmailTest extends TestCase
{
    /**
     * @covers ::fromString
     */
    public function testCanBeCreatedFromValidEmailAddress()
    {
        $this->assertInstanceOf(
            Email::class,
            Email::fromString('user@example.com')
        );
    }

    /**
     * @covers ::fromString
     */
    public function testCannotBeCreatedFromInvalidEmailAddress()
    {
        $this->expectException(InvalidArgumentException::class);

        Email::fromString('invalid');
    }

    /**
     * @covers ::fromString
     */
    public function testCanBeUsedAsString()
    {
        $this->assertEquals(
            'user@example.com',
            Email::fromString('user@example.com')
        );
    }
}
